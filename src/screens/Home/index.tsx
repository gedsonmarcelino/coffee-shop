import { Button, Text } from 'react-native';
import { Container } from '../../components/styled';

export function HomeScreen({ navigation }) {
  return (
    <Container>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('View')} title='Show' />
    </Container>
  );
}
