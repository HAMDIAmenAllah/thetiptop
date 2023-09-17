pipeline {
  agent {
    label "ansible-agent"
  }
  stages {
    stage('SCM') {
      steps {
        script {
          checkout scm
        }
      }
    }
    stage('SonarQube Analysis') {
      steps {
        script {
          def scannerHome = tool 'SonarScanner';
          withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
          }
        }
      }
    }
    stage('Detect Branch and build app') {
      steps {
        script {
          def currentBranch = GIT_BRANCH.substring(7)
          if (currentBranch == 'dev') {
            if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
              // Execute the Ansible playbook
              sh "ansible-playbook /home/devops/tools/ansible/dev/playbook.yml"
            }
          } else if (currentBranch == 'main') {
            if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
              // Execute the Ansible playbook
              sh "ansible-playbook /home/devops/tools/ansible/prod/playbook.yml"
            }
          } else if (currentBranch == 'preprod') {
            if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
              // Execute the Ansible playbook
              sh "ansible-playbook /home/devops/tools/ansible/preprod/playbook.yml"
            }
          }
        }
      }
    }
  }
}