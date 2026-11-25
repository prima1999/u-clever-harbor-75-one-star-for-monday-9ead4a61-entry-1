// One Star for Monday: a one-star review of Monday, as if Monday were a restaurant.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const review = "One star. Monday's special is cold coffee and a side of emails, served at 7 a.m., and the waiter never comes back.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), review + "\n", "utf8");
