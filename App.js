// ce sont des composants qui vont s'affecter à un objet. Il faut toujours importer les composants.
import MainNavigation from './navigations/MainNavigation';


export default function App() { // App est un composant qui return des composants imbriqués
  return ( // toujours avoir un composant racine.
    // écrans
    <MainNavigation />
  );
}