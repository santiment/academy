@Library('podTemplateLib')
import net.santiment.utils.podTemplates

properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '30', artifactNumToKeepStr: '', daysToKeepStr: '30', numToKeepStr: ''))])

slaveTemplates = new podTemplates()

slaveTemplates.dockerTemplate { label ->
  node(label) {
    stage('Build') {
      container('docker') {
        def scmVars = checkout scm

        if (env.BRANCH_NAME == "main") {
          withCredentials([
            string(
              credentialsId: 'SECRET_KEY_BASE',
              variable: 'SECRET_KEY_BASE'
            ),
            string(
              credentialsId: 'aws_account_id',
              variable: 'aws_account_id'
            )
          ]) {
            def awsRegistry = "${env.aws_account_id}.dkr.ecr.eu-central-1.amazonaws.com"
            docker.withRegistry("https://${awsRegistry}", "ecr:eu-central-1:ecr-credentials") {
              sh "docker build --build-arg BACKEND_URL=https://api-stage.santiment.net -t ${awsRegistry}/academy:stage -t ${awsRegistry}/academy:${scmVars.GIT_COMMIT} ."
              sh "docker push ${awsRegistry}/academy:stage"
              sh "docker push ${awsRegistry}/academy:${scmVars.GIT_COMMIT}"
            }
          }
        }

        if (env.BRANCH_NAME == "production") {
          withCredentials([
            string(
              credentialsId: 'SECRET_KEY_BASE',
              variable: 'SECRET_KEY_BASE'
            ),
            string(
              credentialsId: 'aws_account_id',
              variable: 'aws_account_id'
            )
          ]) {
            def awsRegistry = "${env.aws_account_id}.dkr.ecr.eu-central-1.amazonaws.com"
            docker.withRegistry("https://${awsRegistry}", "ecr:eu-central-1:ecr-credentials") {
              sh "docker build --build-arg BACKEND_URL=https://api.santiment.net -t ${awsRegistry}/academy:production -t ${awsRegistry}/academy:${scmVars.GIT_COMMIT} ."
              sh "docker push ${awsRegistry}/academy:production"
              sh "docker push ${awsRegistry}/academy:${scmVars.GIT_COMMIT}"
            }
          }
        }
      }
    }
  }
}
