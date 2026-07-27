/**
 * Creates a factory around a single lazily-created IntersectionObserver.
 * Per-element callbacks are stored in a WeakMap and dispatched as entries
 * arrive, so many directive instances can share one observer.
 */
export function createSharedObserver(options: IntersectionObserverInit) {
  let observer: IntersectionObserver | null = null;
  const callbacks = new WeakMap<Element, (entry: IntersectionObserverEntry) => void>();

  function getObserver(): IntersectionObserver {
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          callbacks.get(entry.target)?.(entry);
        });
      }, options);
    }
    return observer;
  }

  return {
    observe(element: Element, callback: (entry: IntersectionObserverEntry) => void): void {
      callbacks.set(element, callback);
      getObserver().observe(element);
    },
    release(element: Element): void {
      callbacks.delete(element);
      observer?.unobserve(element);
    }
  };
}
