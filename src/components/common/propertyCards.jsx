import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
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
  
export function FeatureCard({ image, title, description }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} height={160} alt={title} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          Featured
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Learn More
      </Button>
    </Card>
  );
}
