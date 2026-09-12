import { BRIGHTWIRE } from "./brightwire";
import { COASTLINE } from "./coastline";
import { HALDEN } from "./halden";
import { MARLOWEFINCH } from "./marlowefinch";
import { WILLOWCREEK } from "./willowcreek";
import type { DemoSite, Trade } from "./types";

export * from "./types";

/** Every demo site, in the order they are presented. */
export const DEMOS: DemoSite[] = [BRIGHTWIRE, WILLOWCREEK, MARLOWEFINCH, COASTLINE, HALDEN];

export const DEMO_BY_SLUG = Object.fromEntries(
  DEMOS.map((demo) => [demo.slug, demo]),
) as Record<string, DemoSite | undefined>;

/** The demo that belongs to each ThreSiNi vertical landing page. */
export const DEMO_FOR_TRADE = Object.fromEntries(
  DEMOS.map((demo) => [demo.trade, demo]),
) as Record<Trade, DemoSite>;
