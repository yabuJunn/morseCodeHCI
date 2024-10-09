const int blueLed1Pin = 2;
const int blueLed2Pin = 3;
const int blueLed3Pin = 4;
const int redLedPin = 5;

const int blueButtonPin = 13;
const int redButtonPin = 12;

void setup() {
  Serial.begin(9600);

  pinMode(blueLed1Pin, OUTPUT);
  pinMode(blueLed2Pin, OUTPUT);
  pinMode(blueLed3Pin, OUTPUT);
  pinMode(redLedPin, OUTPUT);

  pinMode(blueButtonPin, INPUT);
  pinMode(redButtonPin, INPUT);
}

void loop() {
  int blueButtonState = digitalRead(blueButtonPin);
  int redButtonState = digitalRead(redButtonPin);

  if (blueButtonState == HIGH) {
    digitalWrite(blueLed1Pin, HIGH);
    digitalWrite(blueLed2Pin, HIGH);
    digitalWrite(blueLed3Pin, HIGH);
  } else {
    digitalWrite(blueLed1Pin, LOW);
    digitalWrite(blueLed2Pin, LOW);
    digitalWrite(blueLed3Pin, LOW);
  }

  if (redButtonState == HIGH) {
    digitalWrite(redLedPin, HIGH);
  } else {
    digitalWrite(redLedPin, LOW);
  }

  String dataToSend = "{ \"lineButton\": " + String(blueButtonState) + ", \"pointButton\": " + String(redButtonState) + " }";

  Serial.println(dataToSend);

  delay(150);
}
