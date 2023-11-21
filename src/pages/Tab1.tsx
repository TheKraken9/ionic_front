import React from 'react';
import { IonItem, IonLabel, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
    // Exemple de données pour les matchs à venir et les scores
    const upcomingMatches = [
        { team1: 'Équipe A', team2: 'Équipe B', date: '2023-12-01T18:00:00' },
        { team1: 'Équipe C', team2: 'Équipe D', date: '2023-12-02T15:30:00' },
        // Ajoutez d'autres matchs à venir ici
    ];

    const matchOfWeekScore = { team1: 'Équipe A', team2: 'Équipe B', score1: 2, score2: 1 };

    // Exemple de statistiques
    const statistics = {
        totalMatches: 10,
        wins: 5,
        draws: 3,
        losses: 2,
    };

    return (
        <IonList>
            {/* Affichage des matchs à venir */}
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Matchs à venir</IonCardSubtitle>
                    <IonCardTitle>Prochains matchs</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    {upcomingMatches.map((match, index) => (
                        <IonItem key={index} lines="none" className="centered-item">
                            <IonLabel className="small-text">
                                <div>{`${match.team1} vs ${match.team2}`}</div>
                                <div>{new Date(match.date).toLocaleString()}</div>
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonCardContent>


            </IonCard>

            {/* Affichage des scores du match de la semaine */}
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Scores de la semaine</IonCardSubtitle>
                    <IonCardTitle>Match de la semaine</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonItem>
                        <IonLabel className="small-text">{`${matchOfWeekScore.team1} ${matchOfWeekScore.score1} - ${matchOfWeekScore.score2} ${matchOfWeekScore.team2}`}</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>

            {/* Affichage des statistiques */}
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Statistiques</IonCardSubtitle>
                    <IonCardTitle>Tableau de bord - Lakers</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonItem>
                        <IonLabel>Nombre total de matchs</IonLabel>
                        <IonLabel slot="end">{statistics.totalMatches}</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Victoires</IonLabel>
                        <IonLabel slot="end">{statistics.wins}</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Matchs nuls</IonLabel>
                        <IonLabel slot="end">{statistics.draws}</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Défaites</IonLabel>
                        <IonLabel slot="end">{statistics.losses}</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </IonList>
    );
};

export default Tab1;
