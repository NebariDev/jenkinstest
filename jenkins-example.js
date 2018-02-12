pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'echo step 1'
				bat 'echo step 2'
            }
        }
    }
}