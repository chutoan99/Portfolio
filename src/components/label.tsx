import styled from 'styled-components';
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
const ContentWrapper = styled.div`
  background: rgba(147, 107, 232, 0.15);
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: 640px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  @media (min-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;
const Content = styled.div`
  display: flex;
  color: #3f3a64;
  margin-bottom: 0;
  margin-top: 0;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  line-height: 3.75rem;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  max-width: 75rem;
  height: 4.5625rem;
  color: 1.7rem;

  @media (min-width: 640px) {
    font-size: 2.125rem;
  }
  @media (min-width: 768px) {
    font-size: 3.125rem;
  }
`;
