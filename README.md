# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/1372755394-ai/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/1372755394-ai/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A newspaper front page summing up Sunday 22 November 2026 in one 1024×1024 image: the COP31 climate summit collapsing with no deal in Antalya, a Russian drone hitting a Kyiv-region apartment block, suspected Ukrainian sea drones striking a Russian warship in Libya, Iran's strike on a Bahrain industrial site, settler arson in the West Bank, a deadly factory fire in Indonesia, and BepiColombo reaching Mercury — with every headline and figure rendered as crisp text around an AI-generated illustration.

## Stories on the page

- **Lead — COP31 collapses, no deal in Antalya.** After 17 days, the UN climate summit ends with no agreement; the EU, UK and Panama reject a final draft that never mentions fossil fuels, two days past the deadline. Sources: One Turn, Reuters.
- **Day in numbers — Dymer: 2 killed, 14 missing; Benghazi: Russian warship hit; Java factory fire: 3 dead, dozens missing.** Sources: Reuters, One Turn, Axios.
- **Ukraine — Drone hits flats near Kyiv; 14 missing.** A Russian drone strikes a five-storey block in Dymer, north of Kyiv: 2 killed, at least 14 missing under the rubble. Sources: Reuters, One Turn.
- **Libya — Russian warship hit in Benghazi port.** Suspected Ukrainian sea drones strike the corvette Merkury; Axios reports Ukraine responsible — the war's map widens. Sources: One Turn, Axios.
- **Gulf — Iran strikes Bahrain site; tankers hit.** Bahrain says projectiles hit an industrial site in Sitra, injuring two; Gulf states condemn; a Russian ship still burns off Finland. Sources: Reuters, One Turn.
- **West Bank — Settlers torch cars in four villages.** Twelve Palestinian vehicles burned near Ramallah overnight; Israel opens an inquiry; Eisenkot calls it terrorism. Sources: One Turn, AP.
- **Indonesia — Factory fire kills 3; dozens missing.** A candy factory in Cikande, Banten, burns; three workers dead and around 36 still unaccounted for. Sources: AP, One Turn.
- **Space — BepiColombo reaches Mercury.** After an eight-year journey, the European-Japanese mission enters orbit around the Solar System's smallest planet. Source: One Turn.
- **Also — FBI crime database reportedly hacked; Denmark expels Russian defence attaché over 'assassination plot'; Nigeria boat capsizes, 24 dead; Phumzile Mlambo-Ngcuka dies at 71.**

Every figure above was checked against live news on the morning of 23 November 2026 (Beijing time); nothing was invented.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) copies the committed `entry.png` to the output directory. Rebuild the image itself with `python3 build_frontpage.py` (needs PIL and the hero illustration in `assets/`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=qajetvf4&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
