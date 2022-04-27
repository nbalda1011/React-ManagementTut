import './App.css';
import Customer from './component/Customer';
import { Component } from 'react';

const customers = [
  {
    "id": 1,
    'image': 'https://placeimg.com/64/64/any',
    'userName': "nb",
    'userBirthday': '951011',
    'gender': "man",
    'job': "developer"
  },
  {
    "id": 2,
    'image': 'https://placeimg.com/64/64/2',
    'userName': "nb01",
    'userBirthday': '951011',
    'gender': "ma",
    'job': "student"
  },
  {
    "id": 3,
    'image': 'https://placeimg.com/64/64/3',
    'userName': "nb02",
    'userBirthday': '951011',
    'gender': "man",
    'job': "goverment"
  }
]

class App extends Component {
  render(){
    return (
        <div>
          {
            customers.map(c => {
              return<Customer
                key={c.id}
                id={c.id}
                name={c.userName}
                image={c.image}
                birthday={c.userBirthday}
                gender={c.gender}
                job={c.job}
              />
            })
          }
        </div>
    );
  }
}

export default App;
