import { Text } from '@cpd/ui';
import { CurrentProfileBoard } from '@cpd/widgets/current-profile';

export default function SettingsProfilePage() {
  return (
    <CurrentProfileBoard>
      <Text
        as={'h1'}
        marginTop={0}
      >
        Profile
      </Text>
    </CurrentProfileBoard>
  );
}
