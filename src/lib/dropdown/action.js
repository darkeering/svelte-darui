
export function portal(node) {
  let slot = document.body;
  slot?.appendChild(node);
  return {
    destroy() {
      node.remove()
    }
  }
}