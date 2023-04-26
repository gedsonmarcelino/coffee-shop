import { Button, Text } from 'react-native';
import { Container } from '../../components/styled';
import { useEffect } from 'react';
import { Api } from '../../services/Api';

export function HomeScreen({ navigation }) {

  async function fetchData() {
    console.log('drinks', await Api.get('/drinks'))
    console.log('drink:1', await Api.get('/drinks/1'))
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
