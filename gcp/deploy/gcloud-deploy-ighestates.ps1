$state = $args[0].ToLower()
$deploymentName = 'ighestates-dev-deploy'

if ($state -eq 'start'){
  write-output("You are now attempting to $state the deploy")
  gcloud deployment-manager deployments create $deploymentName --config=ighestates-deployment.yaml
}
elseif ($state -eq 'delete') {
  write-output("You are now attempting to $state the deploy")
  gcloud deployment-manager deployments delete $deploymentName -q
}
elseif ($state -eq 'redeploy') {
  write-output("You are now attempting to $state the deploy")
}
else {
  write-warning('seek help, buddy')
}
