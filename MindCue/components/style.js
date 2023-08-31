import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  button1: {
    width: 100,
    height: 30,
    backgroundColor: 'transparent',
    color: '#638184',
    fontFamily: 'Lexend-Regular',
    fontSize: 30,
    borderRadius: 5,
    padding: 30,
    borderRadius: 5,
  },
  textbox: {
    color: '#638184',
    borderColor: '#638184',
    borderBottomWidth: 2,
    paddingHorizontal: 0,
    width: 190,
    height: 22,
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    backgroundColor: 'transparent',
  },
  box1: {
    width: 190,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    top: 160,
    marginLeft: 100,
  },
  box2: {
    width: 190,
    height: 220,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
    top: 50,
    marginLeft: 100,
  },
  box3 : {
    color: 'black',
    alignContent: 'left',
    justifyContent: 'left',
    gap: 8,
  },
  box4: {
    width: 190,
    height: 220,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
    top: 60,
    marginLeft: 100,
  },
  signInTitle : {
    color: '#DC989A',
    fontFamily: 'Poppins-Bold',
    //fontWeight: 'bold',
    fontSize: 51,
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 80,
    top: 120,
    marginLeft: 100,
  },
  registerTitle : {
    color: '#DC989A',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    //fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 80,
    top: 20,
    marginLeft: 100,
  },
  signInText: {
    color: '#DC989A',
    textAlign: 'center',
    //fontWeight: 'bold',
    fontFamily: 'Lexend-Regular',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    },
  numberInput : {
    backgroundColor: 'transparent',
    color: '#638184',
    borderColor: '#638184',
    borderBottomWidth: 5,
    paddingHorizontal: 0,
    textAlign: 'center',
    width: 190,
    height: 100,
    fontSize: 70,
    fontFamily: 'Lexend-Regular',
    backgroundColor: 'transparent',
  },
  userTitle : {
    color: '#DC989A',
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    //fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 50,
  },
  userTypeContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    width: 170,
  },
  generalText : {
    color: '#638184',
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
  },
  dashboard : {
    borderColor: '#EFD1D2',
    borderWidth: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 190,
    borderRadius: 20,
    gap: 15,
    paddingBottom: 30,
    width: 330,
    alignItems: 'center',
    marginLeft: 30,
    top: 65
  },
  dashboardTitle : {
    backgroundColor: '#F4E5E6',
    color: '#DC989A',
    //fontWeight: 'bold',
    fontSize: 24,
    padding: 10,
    width: 320,
    textAlign: 'center',
    borderTopEndRadius: 15,
    fontFamily: 'Poppins-Regular',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  dashboardOptions : {
    color: '#638184',
    borderBottomWidth: 2,
    borderColor: '#638184',
    width: 230,
    fontSize: 18,
    paddingBottom: 10,
    fontFamily: 'Lexend-Regular',
  },
  generalBox : {
    borderColor: '#C2DCDE',
    borderWidth: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 190,
    borderRadius: 20,
    gap: 7,
    paddingBottom: 30,
    width: 330,
    alignItems: 'center',
    marginLeft: 30,
    top: 30,
  },
  triggersTitle : {
    backgroundColor: '#D2E5E7',
    color: '#638184',
    fontSize: 25,
    padding: 10,
    width: 320,
    height: 55,
    textAlign: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    fontFamily: 'Poppins-Regular',
  },
  triggerOptions : {
    color: '638184',
    fontFamily: 'Lexend-Regular',
    fontSize: 16,
    color: '#638184',
  },
  checkboxContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
  },
  keywords : {
    borderColor: '#C2DCDE',
    borderWidth: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 190,
    borderRadius: 20,
    gap: 7,
    paddingBottom: 30,
    width: 330,
    alignItems: 'center',
    marginLeft: 30,
    top: 80,
  },
  radiobuttonContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
  },
  reportButton: {
    width: 200,
    padding: 100,
  },
  timerContainer: {
    backgroundColor: "#F1F1F1", 
    alignItems: "center", 
    justifyContent: "center",
    top: 50,
  },
  QRContainer: {
    borderColor: '#C2DCDE',
    borderWidth: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 190,
    borderRadius: 20,
    paddingBottom: 50,
    gap: 50,
    width: 330,
    alignItems: 'center',
    marginLeft: 30,
    top: 30,
  },
  doctorImage : {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#DC989A',
  },
  headerContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'center',
    backgroundColor: '#F2E1E2',
    padding: 20,
  },
  doctorTitle : {
    color: '#DC989A',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
  },
  bgImage: {
    flex: 1,
    width:390,
    height:490,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100,
  },
  bgImage2: {
    flex: 1,
    width:306,
    height:504,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 80,
    margin: 40,
  },
  bgImage3: {
    flex: 1,
    width:306,
    height:399,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 120,
    margin: 40,
  },
  userCircle : {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 30,
    marginTop: 20,
  },
  userGreet: {
    color: '#638184',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    top: 20,
    marginLeft: 60,
  },
  userGreet2: {
    color: '#638184',
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    top: 17,
    marginLeft: 60,
  },
});

export default style;
