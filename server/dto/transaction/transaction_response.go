package transactiondto

import (
	"dumbsound/models"
	"time"
)

type TransactionResponse struct {
	ID            int         `json:"id"`
	UserID        int         `json:"userid"`
	User          models.User `json:"user"`
	StartDate     time.Time   `json:"startdate" gorm:"type: varchar(255)"`
	DueDate       string      `json:"duedate" gorm:"type: varchar(255)"`
	StatusUser    string      `json:"statususer" gorm:"type: varchar(255)"`
	StatusPayment string      `json:"statuspayment" gorm:"type: varchar(255)"`
}
