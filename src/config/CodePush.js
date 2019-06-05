import CodePush from 'react-native-code-push'

const codePushDeploymentKeys = {
  staging: 'I-d6wshop4-3YrIjf2bXqm0o_rpLSk-hPiZBAN',
  production: 'GE3F2f6g7fJlnseoYggaTmJCcEwsrJhPsWBAE'
}
/*
Release to Staging/Production:
  iOS: $ appcenter codepush release-react -a Lylan/SpotifyAlarm-d Staging
  iOS: $ appcenter codepush release-react -a Lylan/SpotifyAlarm-d Production
*/

export default {
  deploymentKey: codePushDeploymentKeys.staging,
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.IMMEDIATE
}
