import {
    IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import bj from "../assets/bj.svg";
import { eyedropOutline } from "ionicons/icons";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading();

  const takeToHome = async (event: any) => {
    event.preventDefault();
    await present("Get Gotem'd...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "back");
    }, 2000);
    router.push("/app", "back");
  };

  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent scrollY={false} className="ion-padding">
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <div className="ion-text-center ion-padding">
                <img src={bj} alt="Bojack svg here" />
              </div>
            </IonCol>
          </IonRow>

          <IonRow class="ion-justify-content-center">
            <IonCol size ="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={takeToHome}>
                    <IonInput
                      fill="outline"
                      labelPlacement="floating"
                      label="What is your name?"
                      type="text"
                      placeholder="Starts with F, ends in eorge"
                    >
                    </IonInput>
                    <IonButton
                    expand="block"
                    className="ion-margin-top"
                    type="submit"
                    >Perish
                    <IonIcon icon={eyedropOutline} slot="end"></IonIcon>
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
