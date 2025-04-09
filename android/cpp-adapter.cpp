#include <jni.h>
#include "react-native-header-search.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_headersearch_HeaderSearchModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return headersearch::multiply(a, b);
}
