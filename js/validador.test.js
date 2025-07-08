const validarCorreo = require('./validador');

describe("Validación de correos - PDD", () => {
  test("Debe aceptar correos válidos que terminan en @gmail.com", () => {
    expect(validarCorreo("usuario@gmail.com")).toBe(true);
  });

  test("Debe rechazar correos incorrectos que solo contienen 'gmail'", () => {
    expect(validarCorreo("usuario@gmail123.com")).toBe(false);
    expect(validarCorreo("test@notgmail.com")).toBe(false);
  });
});
