// news-image-20261122: entry point.
//
// The front page itself is entry.png, rendered in advance by
// build_frontpage.py (a 1024x1024 page of THE WORLD for Sunday
// 22 November 2026). This program's only job is to hand that finished
// page to the grader: read the PNG, check it is a genuine PNG inside
// the gate limits, and write the exact same bytes to
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output/entry.png).
//
// Node 22, standard library only. No network access, no secrets.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_FILE = "entry.png";
const TARGET_FILE = "entry.png";
const BYTE_LIMIT = 1_000_000;
const EDGE_LIMIT = 1024;
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, SOURCE_FILE);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const targetPath = join(outputDir, TARGET_FILE);

function readHeader32(bytes, offset) {
  return bytes.readUInt32BE(offset);
}

function checkPng(bytes) {
  if (bytes.length < 8) {
    throw new Error("entry.png is shorter than a PNG signature");
  }
  for (let i = 0; i < PNG_MAGIC.length; i++) {
    if (bytes[i] !== PNG_MAGIC[i]) {
      throw new Error("entry.png does not start with the PNG signature");
    }
  }
  if (bytes.length < 24) {
    throw new Error("entry.png is too short to hold an IHDR chunk");
  }
  const firstLength = readHeader32(bytes, 8);
  const firstKind = bytes.toString("latin1", 12, 16);
  if (firstLength !== 13 || firstKind !== "IHDR") {
    throw new Error("entry.png has no 13-byte IHDR first chunk");
  }
  const width = readHeader32(bytes, 16);
  const height = readHeader32(bytes, 20);
  if (width > EDGE_LIMIT || height > EDGE_LIMIT) {
    throw new Error(
      `entry.png is ${width}x${height}, over the ${EDGE_LIMIT}x${EDGE_LIMIT} limit`,
    );
  }
  if (bytes.length > BYTE_LIMIT) {
    throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
  }
  return { width, height };
}

function main() {
  const bytes = readFileSync(sourcePath);
  const size = checkPng(bytes);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(targetPath, bytes);
  const written = readFileSync(targetPath);
  if (!written.equals(bytes)) {
    throw new Error("read-back of the written entry.png differs from the source");
  }
  console.log(
    `wrote ${targetPath}: ${size.width}x${size.height} PNG, ${bytes.length} bytes`,
  );
}

main();
