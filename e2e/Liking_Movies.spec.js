const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const likingRestaurant = async ({ I }) => {
  // I.see('No Favorite Restaurant', '#title');
  I.see('No Favorite Restaurant', '.resto-item__not__found');

  I.amOnPage('/');
  I.wait(2);
  I.seeElement('#restaurant-item');
  // const firstRestaurant = await I.grabAttributeFrom('.card a', 'href');
  const firstRestaurant = locate('#restaurant-heading').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.seeElement('#restaurant-item a');
  I.click(locate('#restaurant-item a').first());

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  const likedRestaurant = await I.grabTextFrom(locate('#restaurant-heading').first());
  assert.strictEqual(firstRestaurantTitle, likedRestaurant);
};

Scenario('showing empty liked restaurant', ({ I }) => {
  // I.see('No Favorite Restaurant', '#title');
  I.see('No Favorite Restaurant', '.resto-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  await likingRestaurant({ I });
});

Scenario('unliking one restaurant', async ({ I }) => {
  // Liking
  // await likingRestaurant({ I });
  // I.see('No Favorite Restaurant', '#title');
  I.see('No Favorite Restaurant', '.resto-item__not__found');

  I.amOnPage('/');
  I.wait(2);
  I.seeElement('#restaurant-item');

  const firstRestaurant = locate('#restaurant-heading').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.seeElement('#restaurant-item a');
  I.click(locate('#restaurant-item a').first());

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const likedRestaurant = await I.grabTextFrom(locate('#restaurant-heading').first());
  assert.strictEqual(firstRestaurantTitle, likedRestaurant);

  // Unliking
  I.amOnPage('/#/favorite');
  I.wait(2);
  I.seeElement('#restaurant-item');
  I.click(locate('#restaurant-item a').first());
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  // I.see('No Favorite Restaurant', '#title');
  I.see('No Favorite Restaurant', '.resto-item__not__found');
});
