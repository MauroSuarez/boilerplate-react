import { AppProvider } from '@/providers';
import { AppRoutes } from '@/routes';
import { Theme } from '@/types/theme';

type AppProps = {
  defaultTheme: Theme;
};

function App({ defaultTheme }: AppProps) {
  return (
    <AppProvider defaultTheme={defaultTheme}>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
