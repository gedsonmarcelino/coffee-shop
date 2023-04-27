import { Container } from '../../components/styled';
import { useEffect } from 'react';
import { Api } from '../../services/Api';
import { Header } from '../../components/Header';
import { Searcher } from '../../components/Searcher';
import { Card } from '../../components/Card';
import { CardList } from './styles';

export function HomeScreen({ navigation }) {

  async function fetchData() {
    console.log('drinks', await Api.get('/drinks'))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <Header />
      <Searcher />

      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
      {/* <Button onPress={() => navigation.navigate('View')} title='Show' /> */}
    </Container >
  );
}
