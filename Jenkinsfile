node {

   stage('Preparation') {
      git 'https://github.com/Rule1001/React_Java_Front_end.git'
   }

   stage('Docker Build') {
      sh "docker build -t myfrontend ."
   }

   stage('Stop app') {
      sh "docker stop myfrontend || true"
      sh "docker rm myfrontend || true"
   }

   stage('Docker Deploy') {
      sh "docker run -d --name myfrontend -p 80:3000 myfrontend"
   }

}
