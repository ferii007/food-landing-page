import deluxCheeseBurgerImg from './../assets/img/food/burgers/delux-cheese-burger.png';
import spicyChickenBurgerImg from './../assets/img/food/burgers/spicy-chicken-burger.png';
import VeggieAvocadoBurgerImg from './../assets/img/food/burgers/veggie-avocado-burger.png';

import wholeWheatLoafImg from './../assets/img/food/breads/whole-wheat-loaf.png';
import frenchBaguetteImg from './../assets/img/food/breads/french-baguette.png';
import sourdoughBouleImg from './../assets/img/food/breads/sourdough-boule.png';

import turkeyClubSandwichImg from './../assets/img/food/sandwiches/turkey-club-sandwich.png';
import capresePaniniImg from './../assets/img/food/sandwiches/caprese-panini.png';
import reubenSandwichImg from './../assets/img/food/sandwiches/reuben-sandiwch.png';

import sirlionSteakImg from './../assets/img/food/steaks/sirloin-steak.png';
import ribeyeSteakImg from './../assets/img/food/steaks/ribeye-steak.png';
import primeLibSteakImg from './../assets/img/food/steaks/prime-rib-steak.png';

import margheritaPizzaImg from './../assets/img/food/pizzas/margherita-pizza.png';
import pepperoniPizzaImg from './../assets/img/food/pizzas/pepperoni-pizza.png';
import bbqChickenPizzaImg from './../assets/img/food/pizzas/bbq-chicken-pizza.png';

import vanillaIceCreamImg from './../assets/img/food/ice-cream/vanilla-ice-cream.png';
import strawberrySorbetImg from './../assets/img/food/ice-cream/strawberry-sorbet.png';
import rockyRoadIceCreamImg from './../assets/img/food/ice-cream/rocky-road-ice-cream.png';

// import turkeyClubSandwich from './../assets/img/food'

export const menus = [
    {
        name: 'Burgers',
        param: 'burgers',
        icon: '🍔',
        products: [
            {
                name: 'Deluxe Cheeseburger',
                dsc: 'Grilled beef, melted cheese, fresh veggies.',
                img: deluxCheeseBurgerImg,
                price: '5.99',
            },

            {
                name: 'Spicy Chicken Burger',
                dsc: 'Spicy chicken, special sauce, soft bun.',
                img: spicyChickenBurgerImg,
                price: '4.49',
            },

            {
                name: 'Veggie Avocado Burger',
                dsc: 'Plant-based patty, avocado, zesty sauce.',
                img: VeggieAvocadoBurgerImg,
                price: '5.49',
            },
        ]
    },
    {
        name: 'Breads',
        param: 'breads',
        icon: '🍞',
        products: [
            {
                name: 'Whole Wheat Loaf',
                dsc: 'Nutritious whole wheat artisan bread.',
                img: wholeWheatLoafImg,
                price: '3.49',
            },

            {
                name: 'French Baguette',
                dsc: 'Classic French bread with crispy crust.',
                img: frenchBaguetteImg,
                price: '2.99',
            },

            {
                name: 'Sourdough Boule',
                dsc: 'Artisan sourdough bread with tangy flavor.',
                img: sourdoughBouleImg,
                price: '4.25',
            },
        ]
    },
    {
        name: 'Sandwiches',
        param: 'sandwiches',
        icon: '🥪',
        products: [
            {
                name: 'Turkey Club Sandwich',
                dsc: 'Roasted turkey, bacon, lettuce, tomato.',
                img: turkeyClubSandwichImg,
                price: '7.99',
            },

            {
                name: 'Caprese Panini',
                dsc: 'Fresh mozzarella, tomatoes, basil pesto.',
                img: capresePaniniImg,
                price: '6.49',
            },

            {
                name: 'Reuben Sandwich',
                dsc: 'Corned beef, crispy bacon, fresh vegetables.',
                img: reubenSandwichImg,
                price: '6.99',
            },
        ]
    },
    {
        name: 'Steaks',
        param: 'steaks',
        icon: '🥩',
        products: [
            {
                name: 'Sirloin Steak',
                dsc: 'Dense, aromatic, medium beef cut.',
                img: sirlionSteakImg,
                price: '20',
            },

            {
                name: 'Ribeye Steak',
                dsc: 'Fatty, flavorful, affordable beef cut.',
                img: ribeyeSteakImg,
                price: '25',
            },

            {
                name: 'Prime Rib Steak',
                dsc: 'Savory, coarse-grained, economical beef cut.',
                img: primeLibSteakImg,
                price: '18',
            },
        ]
    },
    {
        name: 'Pizzas',
        param: 'pizzas',
        icon: '🍕',
        products: [
            {
                name: 'Margherita Pizza',
                dsc: 'Classic tomato, mozzarella, basil pizza.',
                img: margheritaPizzaImg,
                price: '12',
            },

            {
                name: 'Pepperoni Pizza',
                dsc: 'Abundant pepperoni, melted cheese pizza.',
                img: pepperoniPizzaImg,
                price: '15',
            },

            {
                name: 'BBQ Chicken Pizza',
                dsc: 'Tangy BBQ sauce, grilled chicken pizza.',
                img: bbqChickenPizzaImg,
                price: '18',
            },
        ]
    },
    // {
    //     name: 'Drinks',
    //     param: 'drinks',
    //     icon: '🥤'
    // },
    {
        name: 'Ice Cream',
        param: 'ice-cream',
        icon: '🍨',
        products: [
            {
                name: 'Vanilla Ice Cream',
                dsc: 'Classic creamy vanilla-flavored ice cream.',
                img: vanillaIceCreamImg,
                price: '1.27',
            },

            {
                name: 'Strawberry Sorbet',
                dsc: 'Refreshing dairy-free strawberry sorbet.',
                img: strawberrySorbetImg,
                price: '1.99',
            },

            {
                name: 'Rocky Road Ice Cream',
                dsc: 'Creamy chocolate ice cream with marshmallows and nuts.',
                img: rockyRoadIceCreamImg,
                price: '1.8',
            },
        ]
    },
]