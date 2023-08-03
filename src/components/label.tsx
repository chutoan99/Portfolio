interface LabelModel {
  id: string;
  content: string;
}
export default function Label({ id, content }: LabelModel) {
  return (
    <section id={id}>
      <div className="label">
        <div className="container label-content">{content}</div>
      </div>
    </section>
  );
}
