import {
    IonAvatar,
    IonContent,
    IonHeader,
    IonItem, IonItemOption, IonItemOptions, IonItemSliding,
    IonLabel,
    IonList,
    IonPage,
    IonText,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const arr = [
    {
        name: 'Item1',
        desc: 'Description 1'
    },
    {
        name: 'Item2',
        desc: 'Description 2'
    },
    {
        name: 'Item3',
        desc: 'Description 3'
    },
    {
        name: 'Item4',
        desc: 'Description 4'
    },
    {
        name: 'Item5',
        desc: 'Description 5'
    }
    ];

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listes des équipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList>
            {arr.map(elem => (
                    <IonItemSliding key={elem.name}>
                        <IonItem>
                            <IonAvatar>
                                <img src={``}/>
                            </IonAvatar>
                            <IonLabel>
                                <h2>{elem.name}</h2>
                                <h3>{elem.desc}</h3>
                                <p>Some helper text</p>
                            </IonLabel>
                        </IonItem>

                        <IonItemOptions side="start">
                            <IonItemOption onClick={() => alert("okay e!")}>Voir Stats</IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
