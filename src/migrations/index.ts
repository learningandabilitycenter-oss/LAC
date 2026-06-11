import * as migration_20260602_121652_initial_schema from './20260602_121652_initial_schema';
import * as migration_20260611_000000_add_testimonials from './20260611_000000_add_testimonials';

export const migrations = [
  {
    up: migration_20260602_121652_initial_schema.up,
    down: migration_20260602_121652_initial_schema.down,
    name: '20260602_121652_initial_schema'
  },
  {
    up: migration_20260611_000000_add_testimonials.up,
    down: migration_20260611_000000_add_testimonials.down,
    name: '20260611_000000_add_testimonials'
  },
];
