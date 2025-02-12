pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'node20', type: 'nodejs'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/zjyfantasy/myReactApp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'pnpm install'
            }
        }

        stage('Build') {
            steps {
                sh 'pnpm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker exec nginx rm -rf /var/www/html/* && \
                    docker cp dist/. nginx:/var/www/html/
                '''
            }
        }

        // stage('Deploy') {
        //     steps {
        //         // 这里可以添加部署步骤，例如使用 scp 或 rsync 将构建后的文件上传到服务器
        //         sshPublisher(
        //             publishers: [
        //                 sshPublisherDesc(
        //                     configName: '138.2.90.5', // 与 Jenkins 中配置的 SSH 服务器名称一致
        //                     transfers: [
        //                         sshTransfer(
        //                             sourceFiles: 'dist/**', // 要传输的文件（例如构建后的 dist 目录）
        //                             removePrefix: 'dist', // 移除路径前缀
        //                             remoteDirectory: '', // 远程目录（相对于配置中的 Remote Directory）
        //                             execCommand: 'echo "Deployment complete"' // 传输完成后执行的命令
        //                         )
        //                     ]
        //                 )
        //             ]
        //         )
        //     }
        // }
    }
}