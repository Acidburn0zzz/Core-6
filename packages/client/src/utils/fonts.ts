import { loadAsync } from 'expo-font';

export default async function loadFonts() {
  try {
    await loadAsync({
      OpenSans: require('../../assets/fonts/OpenSans-Regular.ttf'),
      Oswald: require('../../assets/fonts/Oswald.ttf'),
    });
  } catch (e) {
    console.warn("Can't load font: ", e?.code, e?.message);
  }
}
