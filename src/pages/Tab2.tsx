import React, { useEffect, useState } from "react";
import {
    IonAvatar, IonButton,
    IonContent,
    IonHeader, IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonPage,
    IonText,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import {backspace} from "ionicons/icons";
import {useHistory} from "react-router";

const Tab2: React.FC = () => {
    const [equipes, setEquipes] = useState<Array<{ Nation: string; Population: number; Year: string }>>([]);
    const [joueurs, setJoueurs] = useState<Array<{ Nation: string; Population: number; Year: string }>>([]);


    useEffect(() => {
        const getApi = () => {
            fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setEquipes(data.data);
                })
                .catch((error) => console.log(error));
        };
        getApi();
    }, []);

    const fetchDataById = (year: string) => {
        setEquipes([]);
        fetch(
            `https://datausa.io/api/data?drilldowns=Nation&measures=Population&Year=${year}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setJoueurs(data.data);
            })
            .catch((error) => console.log(error));
    };
    const history = useHistory();
    const handleReload = () => {
        history.go(0);
    };

    return (
        <IonPage>
            <IonHeader>
                {
                    joueurs.length > 0 && (
                        <IonButton onClick={handleReload} className="text_kely"><IonIcon aria-hidden="true" icon={backspace}></IonIcon> Retour</IonButton>
                    )
                }
                {
                    joueurs.length === 0 && (
                        <IonToolbar>
                            <IonTitle>Listes des équipes</IonTitle>
                        </IonToolbar>
                    )
                }
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonList>
                    {equipes.map((elem, index) => (
                        <IonItemSliding key={index}>
                            <IonItem>
                                <IonAvatar>
                                    <img src={`data:image/jpeg;base64,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`} />
                                </IonAvatar>
                                <IonLabel>
                                    <h2>{elem.Nation}</h2>
                                    <h3>{elem.Population}</h3>
                                    <p>Some helper text</p>
                                </IonLabel>
                            </IonItem>
                            <IonItemOptions side="start">
                                <IonItemOption
                                    onClick={() => fetchDataById(elem.Year)}
                                >
                                    Voir Stats
                                </IonItemOption>
                            </IonItemOptions>
                        </IonItemSliding>
                    ))}
                </IonList>

                {/* Afficher la liste des joueurs en fonction de l'année sélectionnée */}
                {joueurs.length > 0 && (
                    <IonList>
                        {joueurs.map((joueur, index) => (
                            <IonItem key={index}>
                                <IonAvatar>
                                    <img src={`data:image/jpeg;base64,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`} />
                                </IonAvatar>
                                <IonLabel>
                                    <h2>{joueur.Nation}</h2>
                                    <h3>{joueur.Population}</h3>
                                    {/* Ajoutez d'autres détails du joueur selon vos besoins */}
                                </IonLabel>
                            </IonItem>
                        ))}
                    </IonList>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
