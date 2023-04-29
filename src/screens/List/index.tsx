import { Container } from '../../components/styled';
import { useEffect } from 'react';
import { Api } from '../../services/Api';
import { Header } from '../../components/Header';
import { Searcher } from '../../components/Searcher';
import { Card } from '../../components/Card';
import { CardList } from './styles';

export function ListScreen({ navigation }) {

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
        {[1, 2, 3, 4, 5, 6].map(item => (
          <Card key={item} navigation={navigation} />
        ))}
      </CardList>
    </Container >
  );
}
