export const page = {
  url: new URL("http://localhost/"),
  params: {},
  route: { id: null },
  status: 200,
  error: null,
  data: {},
}

export const subscribe = fn => {
  fn(page)
  return () => {}
}

export default { page, subscribe }
