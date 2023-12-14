import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonLifeCycleContext,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Choo_choo.css";
import Train1 from "../assets/train5.0.gif";
import Train2 from "../assets/train4.0.gif";
import Polar from "../../assets/Polar Express.mp3";
import Floor1 from "./Floor1";
import Floor2 from "./Floor2";
import { Redirect, Route } from "react-router";
import floor1 from "../assets/floor1-3.gif"
import floor2 from "../assets/floor2-2.gif"
import sound from "../assets/sound-2.gif"


const Choo_choo: React.FC = () => {
  const [style, setStyle] = useState({ opacity: 0 });
  const [source, setSource] = useState(floor1)

  useEffect(() => {
    setTimeout(function () {
      setStyle({ opacity: 1 });
    }, 20500);
  }, []);

  const changeGif = () => {
    if(source==floor1)
    {
    setSource(floor2)
    }
    else{
      setSource(floor1)
    }
  }

  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent color={"primary"} className="ion-padding">
        <ReactAudioPlayer src={Polar} autoPlay loop></ReactAudioPlayer>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol className="ion-text-center">
              <div style={style} id="train1" className="ion-padding">
                <img src={Train1}></img>
                <span>UNO --- UNO --- UNO --- UNO --- UNO --- UNO</span>
              </div>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol className="ion-text-center" size="auto">
              <div style={style} id="train2" className="ion-padding">
              <span>UNO --- UNO --- UNO --- UNO --- UNO</span>
                <img src={Train2}></img>
              </div>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center" id="half_page">
            <IonCol>
              <IonCard>
                <IonCardContent>
              <img src={source}></img>
              {/*
            <IonTabs>
              
                <IonTabBar slot="bottom">
                  <IonTabButton tab="floor1" href="app/floor1">
                    Ground floor
                  </IonTabButton>
                  <IonTabButton tab="floor2" href="app./floor2">
                    First floor
                  </IonTabButton>
                </IonTabBar>

                <IonRouterOutlet placeholder={undefined}>
                  <Route path="/app/floor1" component={Floor1} />
                  <Route path="/app/floor2" component={Floor2} />
                </IonRouterOutlet>
              </IonTabs>
  */}
  <IonButton expand="block" onClick={changeGif}>Change floor</IonButton>
  </IonCardContent>
  </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img id="sound" src={sound}></img>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Choo_choo;
