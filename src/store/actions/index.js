export const requestHeroes = (offset = 0) => ({
  type: "requestHeroes",
  offset
});

export const setHeroes = heroes => ({
  type: "setHeroes",
  heroes
});

export const setHero = hero => ({
  type: "setHero",
  hero
});

export const setPagination = pagination => ({
  type: "setPagination",
  pagination
});
