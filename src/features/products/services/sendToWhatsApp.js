export const sendOrderToWhatsApp = (cartItems) => {
  const phoneNumber = "573132646453"; // Número en formato internacional (sin '+', con código país)
  const message = {
    order: cartItems.map((item) => ({
      name: item.name,
      price: item.price,
    })),
    total: cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2),
  };

  const text = encodeURIComponent(
    `🛍 *Nuevo Pedido:*\n\n${message.order
      .map((item, i) => `*${i + 1}.* ${item.name} - $${item.price.toFixed(2)}`)
      .join("\n")}\n\n💵 *Total:* $${message.total}`
  );

  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, "_blank");
};
