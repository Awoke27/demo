import { SimpleGrid, Container } from '@mantine/core';
import { FeatureCard } from './propertyCards';
const mockData = [
  {
    image: 'https://picsum.photos/400/200?random=1',
    title: 'Card One',
    description: 'This is the first card with some dummy text.',
  },
  {
    image: 'https://picsum.photos/400/200?random=2',
    title: 'Card Two',
    description: 'Another card with an image and description.',
  },
  {
    image: 'https://picsum.photos/400/200?random=3',
    title: 'Card Three',
    description: 'This one is different and more exciting.',
  },
];

export default function CardList() {
  return (
    <Container size="lg" my="md">
      <SimpleGrid cols={3} spacing="lg" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {mockData.map((item, index) => (
          <FeatureCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
