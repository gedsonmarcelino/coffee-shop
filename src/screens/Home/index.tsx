import { Button, Text } from 'react-native';
import { Container } from '../../components/styled';
import { useEffect } from 'react';
import { Api } from '../../services/Api';

export function HomeScreen({ navigation }) {

  async function fetchData() {
    const data = await Api.get('/movies')
    console.log('data', data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('View')} title='Show' />
    </Container>
  );
}
