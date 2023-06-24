# Infinite Load

## Live Preview
https://infiniteload.huynhdainhan.com

## Local Install

### Install

```bash
yarn
```

### Test

Test only
```bash
yarn test
```

Test coverage check
```bash
yarn coverage
```

### Build

```bash
yarn build
```

### Preview

```bash
yarn preview
```

## Explanation

### API
```
https://dummyjson.com/product/search?q=${search}&limit=20&skip=${skip}
```
search: Input from search box

skip: Pagination (20 items for each page)

### Search box
Take input from user keyboard (debounced 300ms)

### Product list and Product
Show result retrieved from API

### Unit test
1. Verify ProductList display 20 items if passing 20 items
2. Verify useProductQuery retrieve correct data for each page
