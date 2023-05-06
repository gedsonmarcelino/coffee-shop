import { Container } from '../../components/styled';
import { useEffect, useState } from 'react';
import { Api } from '../../services/Api';
import { Header } from '../../components/Header';
import { Searcher } from '../../components/Searcher';
import { Card } from '../../components/Card';
import { CardList } from './styles';

export function ListScreen({ navigation }) {

  const [drinks, setDrinks] = useState([]);
  const [value, setValue] = useState('');

  const drinksFiltered = drinks.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))

  async function fetchData() {
    const data = await Api.get('/drinks');
    setDrinks(data.drinks);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <Header />
      <Searcher value={value} onChangeText={(text) => setValue(text)} />
      <CardList>
        {drinksFiltered && drinksFiltered.map(item => (
          <Card key={item.id} data={item} navigation={navigation} />
        ))}
      </CardList>
    </Container >
  );
}
