pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'node20', type: 'nodejs'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/zjyfantasy/myReactApp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // 这里可以添加部署步骤，例如使用 scp 或 rsync 将构建后的文件上传到服务器
                sh 'echo "Deploying to production..."'
            }
        }
    }
}