export const SALES_PHONE = '(224) 377-9043';
export const SALES_EMAIL = 'openrize@gmail.com';

const LOW_STOCK_THRESHOLD = 8;

function deriveInventoryUnits(product) {
  const base = Number(product.priceRaw || 0) * 11 + Number(product.id || 0) * 3;
  const normalized = Math.round(base) % 36;
  return Math.max(0, normalized);
}

export function withInventory(product) {
  const units = deriveInventoryUnits(product);
  let stockLabel = 'Out of stock';
  let stockClass = 'stock-out';

  if (units > LOW_STOCK_THRESHOLD) {
    stockLabel = 'In stock';
    stockClass = 'stock-in';
  } else if (units > 0) {
    stockLabel = `Low stock (${units} left)`;
    stockClass = 'stock-low';
  }

  return {
    ...product,
    inventory: {
      units,
      isInStock: units > 0,
      isLowStock: units > 0 && units <= LOW_STOCK_THRESHOLD,
      stockLabel,
      stockClass,
    },
  };
}

export function getInventoryStats(products) {
  const prepared = products.map(withInventory);
  return prepared.reduce(
    (acc, product) => {
      if (!product.inventory.isInStock) acc.outOfStock += 1;
      else if (product.inventory.isLowStock) acc.lowStock += 1;
      else acc.inStock += 1;
      return acc;
    },
    { inStock: 0, lowStock: 0, outOfStock: 0 }
  );
}
