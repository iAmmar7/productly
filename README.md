# Productly

Product Listing page with server-side rendering

## How to run

1. First, install the dependencies:

```bash
yarn install
```

2. Update the .env and run deployment server
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Additionally, you can run the test case using
```bash
yarn test
```

## Features based on the requirements
- UI with mobile first CSS using Tailwind.
- [Fake API](https://dummyjson.com/docs/products) to fetch products with pagination.
- Page limit and pagination feature with server-side data.
- Fetch product API on server-side using **getServerSideProps**.
- Fetch categories API on client-side using **apollo useQuery**.
- For advertisement banner; to mock the actual CMS, I am fetching a image from [unsplash](https://unsplash.com/documentation) and passing a random position (top | middle | bottom). Client can update the advertisement banner by updating it in the CMS.
- 2 columns layout on mobile view.
- Option to change the number of columns on desktop view.
- Sort option is not provided by this fake API.
- Filter by category features.
- Unit test cases for a few components.

## Possible improvements
- Write more test cases and increase the unit test coverage.
- On-demand ISR for advertisement banner update.

## Technologies

Tools and technologies used in this project

- [Next JS](https://nextjs.org)
- [React JS](https://reactjs.org)
- [Apollo Client](https://www.apollographql.com/docs/react)
- [Tailwind](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [JEST](https://jestjs.io)

## Deployed on Vercel

Check out https://productly-taupe.vercel.app/
