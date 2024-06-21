import { Content, ContentWrapper } from './styled';
interface LabelModel {
  content: string;
}
export default function Label({ content }: LabelModel) {
  return (
    <section>
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
    </section>
  );
}
