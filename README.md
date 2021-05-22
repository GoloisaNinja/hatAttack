# Gatsby Static Site Generator with Shopify API

### based on course content from Instructor Tom Phillips (UK)

**Getting started**

If you're looking to start your own store you'll need to

add a `.env` file to the root of your project consisting of:

```
GATSBY_SHOP_NAME=
GATSBY_ACCESS_TOKEN=
```

And enter the appropriate values from your own shopify store.

Refer to Shopify docs for how to get started with a dev account.

Then run `gatsby develop` and you're off to the races!

## Goals for this site

- [x] Create products and collections in Shopify API
- [x] Remove base site page provided by Shopify and create a custom front end
- [x] Use data created in Oberlo by instructor for base products list
- [x] Use various tools provided by Gatsby such as image handlers

* [x] Gain a better knowledge around Gatsby and Shopify as CMS

  - [x] Components
    - Landing - will show featured shop items and sale items
    - Individual product pages with product variants
    - Header component with Logo, Search and Cart capability
    - Cart confirmation page as well as Checkout
