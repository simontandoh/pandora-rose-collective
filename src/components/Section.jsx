import clsx from "clsx";

export function Section({ id, className, children }) {
  return (
    <section id={id} data-section className={clsx("section-padding relative", className)}>
      {children}
    </section>
  );
}
