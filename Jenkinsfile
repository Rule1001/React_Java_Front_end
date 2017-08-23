node {

   stage('Slack started') {
      slackSend channel: "#northcoders-java", message: "The front end Empire is Forming"
   }
   stage('Preparation') {
      git 'https://github.com/Rule1001/React_Java_Front_end.git'
   }

   stage('Clean') {
      sh "mvn -Dmaven.test.failure.ignore clean"
   }
   stage('Package') {
      sh "mvn -Dmaven.test.failure.ignore package"
   }

   stage('Docker Build') {
      sh "docker build -t myproperties ."
   }

   stage('Stop app') {
      sh "docker stop myproperties || true"
      sh "docker rm myproperties || true"
   }

   stage('Docker Deploy') {
      sh "docker run -d --name myproperties -p 8081:9090 myproperties"
   }

}
