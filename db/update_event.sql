UPDATE appointments
SET start_date=$3, start_time=$4, end_time=$5, service=$6
WHERE user_id=$1
AND appointment_id=$2;